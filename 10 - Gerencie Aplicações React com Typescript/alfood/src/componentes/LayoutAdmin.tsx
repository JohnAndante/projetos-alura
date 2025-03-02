import { AppBar, Container, Toolbar, Button, Typography, Box, Paper, Link } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const LayoutAdmin = () => {

    const navigate = useNavigate();

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Link>
                            <Button
                                sx={{ my: 2, color: 'white' }}
                                color="inherit"
                                onClick={() => navigate('/admin/restaurantes')}
                            >
                                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                    Administração
                                </Typography>
                            </Button>
                        </Link>
                        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
                            <Link>
                                <Button
                                    sx={{ my: 2, color: 'white' }}
                                    color="inherit"
                                    onClick={() => navigate('/admin/restaurantes')}
                                >
                                    Restaurantes
                                </Button>
                            </Link>
                            <Link>
                                <Button
                                    sx={{ my: 2, color: 'white' }}
                                    color="inherit"
                                    onClick={() => navigate('/admin/pratos')}
                                >
                                    Pratos
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>

        </>
    );
}

export default LayoutAdmin;
