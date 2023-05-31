import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../assets/pequeñosanta.svg'
import iconLogo from '../../assets/iconlogo.png'
import {TextField} from "@mui/material"
import { useAuthContext } from '../../context/userContext';
import {useState, useEffect} from 'react';
import { useCharacterContext } from '../../context/characterContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useDebounce from "../../hooks/useDebounce"

//CAMBIAR LINK POR EL DE REACT ROUTER DOM
//const navigation = useNavigation()

const pages = ['Characters'];
const settings = ['Logout'];

function ResponsiveAppBar() {
  
  const {user, logout} = useAuthContext()
  const navigate = useNavigate()
  // const {personaje, setPersonaje} = useState<string>("")

  const [personaje, setPersonaje] = useState<string>("");
  const debouncedSearch = useDebounce(personaje, 400);
  const {searchFetch, resultFetch} = useCharacterContext()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  function handleInput(e){
    setPersonaje(e.target.value)
    console.log(personaje)
  }


  useEffect(()=>{
    searchFetch(debouncedSearch)
},[debouncedSearch])
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link to="/"><img width="64px" height="64px" src={iconLogo} /></Link>
          {/* <Logo fontSize='large'/> */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              ml:2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Homer Simpson Revised',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#fe0f35',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography className="simpsonTipography" sx={{fontFamily: 'Homer Simpson Revised'}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Homer Simpson Revised',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              onClick={resultFetch}
                key={page}
                sx={{ fontSize:"24px", fontFamily:"Homer Simpson Revised", my: 2,mx:2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          <TextField value={personaje} onChange={handleInput} id="standard-basic" sx={{width:"80%", mt:1, ml:3}} label="Search character..." variant="standard" />

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user?.email? <Avatar alt="Remy Sharp"  src={logo}/> :"" }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Button onClick={logout} size='small'>{setting}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;