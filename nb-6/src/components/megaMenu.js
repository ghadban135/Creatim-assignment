import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

const MegaMenu = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Toolbar>
				<Typography type='title' color='inherit'>
					LOGO
				</Typography>
				<Typography
					variant='h6'
					color='inherit'
					noWrap
					style={{ paddingInline: '20px' }}
				>
					COMPANY NAME
				</Typography>
				<div>
					<Button
						variant='contained'
						color='secondary'
						onClick={handleMenu}
						startIcon={<MenuIcon />}
					>
						Menu
					</Button>
					<Menu
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
						getContentAnchorEl={null}
						marginThreshold={0}
						PaperProps={{
							style: {
								width: '100%',
								maxWidth: '100%',
								left: 0,
								right: 0,
								paddingBottom: '50px',
							},
						}}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						transformOrigin={{ vertical: 'top', horizontal: 'center' }}
					>
						<Grid container>
							<Grid item xs={12} md={4}>
								<MenuItem disabled>
									<Typography variant='h4' color='inherit' noWrap>
										WHAT'S NEW
									</Typography>
								</MenuItem>
								<Divider />
								<br />
								<MenuItem onClick={handleClose}>Option 1</MenuItem>
								<MenuItem onClick={handleClose}>Option 2</MenuItem>
								<MenuItem onClick={handleClose}>Option 3</MenuItem>
								<MenuItem onClick={handleClose}>Option 4</MenuItem>
								<MenuItem onClick={handleClose}>Option 5</MenuItem>
							</Grid>
							<Divider orientation='vertical' flexItem />
							<Grid item xs={12} md>
								<MenuItem disabled>
									<Typography variant='h4' color='inherit' noWrap>
										CATEGORY
									</Typography>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>Category 1</MenuItem>
								<MenuItem onClick={handleClose}>Category 2</MenuItem>
								<MenuItem onClick={handleClose}>Category 3</MenuItem>
								<MenuItem onClick={handleClose}>Category 4</MenuItem>
								<MenuItem onClick={handleClose}>Category 5</MenuItem>
							</Grid>
							<Divider orientation='vertical' flexItem />
							<Grid item xs={12} md={4}>
								<MenuItem disabled>
									<Typography variant='h4' color='inherit' noWrap>
										COLLECTIONS
									</Typography>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>Collection 1</MenuItem>
								<MenuItem onClick={handleClose}>Collection 2</MenuItem>
								<MenuItem onClick={handleClose}>Collection 3</MenuItem>
								<MenuItem onClick={handleClose}>Collection 4</MenuItem>
								<MenuItem onClick={handleClose}>Collection 5</MenuItem>
							</Grid>
						</Grid>
						<Divider />
						<Grid container>
							<Grid item xs={12} md={4}>
								<MenuItem disabled>
									<Typography variant='h4' color='inherit' noWrap>
										BEST SELLER
									</Typography>
								</MenuItem>
								<Divider />
								<br />
								<MenuItem onClick={handleClose}>Accessories</MenuItem>
								<MenuItem onClick={handleClose}>Watches</MenuItem>
								<MenuItem onClick={handleClose}>Crafts</MenuItem>
								<MenuItem onClick={handleClose}>Phones</MenuItem>
							</Grid>
							<Divider orientation='vertical' flexItem />
							<Grid item xs={12} md>
								<MenuItem disabled>
									<Typography variant='h4' color='inherit' noWrap>
										LAST CHANGE
									</Typography>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>Option 1</MenuItem>
								<MenuItem onClick={handleClose}>Option 2</MenuItem>
								<MenuItem onClick={handleClose}>Option 3</MenuItem>
								<MenuItem onClick={handleClose}>Option 4</MenuItem>
							</Grid>
							<Divider orientation='vertical' flexItem />
							<Grid item xs={12} md={4}>
								<MenuItem disabled>
									<Typography variant='h4' color='inherit' noWrap>
										CONTACT US
									</Typography>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>Address</MenuItem>
								<MenuItem onClick={handleClose}>Phone</MenuItem>
								<MenuItem onClick={handleClose}>Email</MenuItem>
							</Grid>
						</Grid>
					</Menu>
				</div>
			</Toolbar>
		</div>
	);
};
export default MegaMenu;
