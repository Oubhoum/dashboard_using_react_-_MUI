import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { Avatar, styled, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutline, HomeOutlined, MapOutlined, PeopleOutline, PersonOutline, PieChartOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';



const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const Array1 = [
    { "text": "Dashboard", "icon": <HomeOutlined />, "path": "/" },
    { "text": "Manage Team", "icon": <PeopleOutline />, "path": "/team" },
    { "text": "Contact Information", "icon": <ContactsOutlined />, "path": "/contact" },
    { "text": "Invoices Balances", "icon": <ReceiptOutlined />, "path": "/invoices" }
];


const Array2 = [
    { "text": "Profile Form", "icon": <PersonOutline />, "path": "/form" },
    { "text": "Calendar", "icon": <CalendarTodayOutlined />, "path": "/calendar" },
    { "text": "FAQ Page", "icon": <HelpOutline />, "path": "/faq" },
];

const Array3 = [
    { "text": "Bar Chart", "icon": <BarChartOutlined />, "path": "/bar" },
    { "text": "Pie Chart", "icon": <PieChartOutline />, "path": "/pie" },
    { "text": "Line Chart", "icon": <TimelineOutlined />, "path": "/line" },
    { "text": "Geography Chart", "icon": <MapOutlined />, "path": "/geography" },
];

const mySrc =
    "https://static.wixstatic.com/media/eaaa2b"
    + "_c87782ef13a34a15a8cd857d30e4836a~mv2.jpg/"
    + "v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_"
    + "0.01,enc_avif,quality_auto/eaaa2b_c87782ef13a3"
    + "4a15a8cd857d30e4836a~mv2.jpg";


const SideBar = ({ open, handleDrawerClose }) => {

    let location = useLocation();

    const navigate = useNavigate();

    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={open}>

            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.
                        // @ts-ignore
                        direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <Avatar sx={{ mx: "auto", my: 1, width: open ? 88 : 44, height: open ? 88 : 44, transition: '0.9s', border: "2px solid grey" }} alt="Img" src={mySrc} />
            <Typography align='center' sx={{ fontSize: open ? 19 : 0, transition: '0.9s' }}>Mowgli</Typography>
            <Typography align='center' sx={{
                fontSize: open ? 13 : 0, transition: '0.9s', color: theme.
                    // @ts-ignore
                    palette.info.main
            }}>Admin</Typography>

            <Divider />

            <List>
                {Array1.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => navigate(item.path)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor: location.pathname === item.path ? (
                                    theme.palette.mode === 'dark' ? grey[800] : grey[200]
                                ) : null,
                            }}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >

                                {item.icon}

                            </ListItemIcon>

                            <ListItemText
                                primary={item.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => navigate(item.path)}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >

                                {item.icon}

                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array3.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => navigate(item.path)}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >

                                {item.icon}

                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    );
};

export default SideBar;