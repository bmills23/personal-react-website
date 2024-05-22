import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import GitHubIcon from '@mui/icons-material/GitHub';
import linkedinIcon from '@mui/icons-material/LinkedIn';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    const theme = createTheme();
    
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header title="About" sections={[]} />
            <main>
            <Grid container spacing={5} sx={{ mt: 4 }}>
                <Grid item xs={12} md={8}>
                <h1>About</h1>
                <p>
                    This is a sample blog created using Material-UI's Blog template.
                </p>
                <p>
                    This blog is created using Material-UI's Blog template. The blog is a single page application that uses React Router to navigate between different pages. The blog has a header, main content, sidebar, and footer. The header contains the blog title and navigation links. The main content contains the main featured post, featured posts, and other posts. The sidebar contains the about section, social media links, and a list of recent posts. The footer contains the copyright information.
                </p>
                </Grid>
            </Grid>
            </main>
        </Container>
        <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </ThemeProvider>
    );
};