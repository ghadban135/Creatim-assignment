import React, { Fragment, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Carousel from 'react-material-ui-carousel';
import InfiniteScroll from 'react-infinite-scroll-component';
import { makeStyles } from '@material-ui/core/styles';
import FilterIcon from '@material-ui/icons/Filter';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import MegaMenu from '../components/megaMenu';

const Home = () => {
	const classes = useStyles();
	const [cards, setCards] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);
	const [isFilter, setFilter] = useState(false);

	const handleFilterClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleFilterClose = () => {
		setAnchorEl(null);
	};

	const fetchMoreData = () => {
		// a fake async api call like which sends
		// 4 more records in 0.5 seconds.
		setTimeout(() => {
			fetch('./data.json')
				.then(function (res) {
					return res.json();
				})
				.then(function (data) {
					if (isFilter) {
						data.reverse();
					}
					setCards(cards.concat(data.slice(cards.length, cards.length + 4)));
				})
				.catch(function (err) {
					console.log(err, ' error');
				});
		}, 500);
	};

	useEffect(() => {
		const getData = () => {
			fetch('./data.json')
				.then(function (res) {
					return res.json();
				})
				.then(function (data) {
					if (isFilter) {
						data.reverse();
					}
					setCards(data.slice(0, 4));
				})
				.catch(function (err) {
					console.log(err, ' error');
				});
		};
		getData();
	}, [isFilter]);

	return (
		<Fragment>
			<AppBar position='sticky'>
				<MegaMenu />
			</AppBar>

			<div className={classes.title}>
				<Container maxWidth='sm'>
					<Typography variant='h3' align='center'>
						Landing Page
					</Typography>
				</Container>
			</div>

			<Carousel
				autoPlay={true}
				animation='slide'
				indicators={true}
				timeout={300}
			>
				<CardMedia className={classes.media} image={image1} title='Image 1'>
					<Typography className={classes.mediaCaption}>Image 1</Typography>
				</CardMedia>
				<CardMedia className={classes.media} image={image2} title='Image 2'>
					<Typography className={classes.mediaCaption}>Image 2</Typography>
				</CardMedia>
				<CardMedia className={classes.media} image={image3} title='Image 3'>
					<Typography className={classes.mediaCaption}>Image 3</Typography>
				</CardMedia>
			</Carousel>
			<br />

			<Button
				variant='outlined'
				color='primary'
				onClick={handleFilterClick}
				startIcon={<FilterIcon />}
			>
				Filter
			</Button>

			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleFilterClose}
			>
				<MenuItem
					onClick={() => {
						setFilter(false);
						handleFilterClose();
					}}
				>
					Ascending
				</MenuItem>
				<MenuItem
					onClick={() => {
						setFilter(true);
						handleFilterClose();
					}}
				>
					Descending
				</MenuItem>
			</Menu>

			<Container className={classes.cardGrid} maxWidth='md'>
				<InfiniteScroll
					dataLength={cards.length}
					next={fetchMoreData}
					hasMore
					style={{ overflow: 'unset' }}
				>
					<Grid container spacing={3} justify='space-around'>
						{cards.map((card, index) => (
							<Grid item key={index} xs={12} sm={6} md={3}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={card.image}
										title={card.name}
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant='h5' component='h2'>
											{card.name}
										</Typography>
										<Typography>{card.description}</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</InfiniteScroll>
			</Container>
		</Fragment>
	);
};

export default Home;

const useStyles = makeStyles(() => ({
	title: {
		padding: '64px 0px 48px',
	},
	cardGrid: {
		paddingTop: '64px',
		paddingBottom: '64px',
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%',
	},
	cardContent: {
		flexGrow: 1,
		backgroundColor: '#E9E0DB',
	},
	media: {
		paddingTop: '40%',
		backgroundSize: 'contain',
		position: 'relative',
	},
	mediaCaption: {
		position: 'absolute',
		bottom: '6px',
		padding: '10px',
		backgroundColor: '#000',
		color: '#fff',
		opacity: 0.6,
		width: '100%',
		fontWeight: 200,
	},
}));
