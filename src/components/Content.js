import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Grid } from '@material-ui/core';
import Skills from './Skills';
// import SimpleCard from './Cards';

function Content() {
    return (
        <div>
            <Container maxWidth="sm" style={{ padding: 20}}>
                {/* <SimpleCard /> */}
                <Grid xs="12">
                    <Grid xs="12">
                        <Typography variant="h1">
                            Hello.
                        </Typography>
                    </Grid>
                    <Grid xs="12">
                        <Typography variant="h3">
                            I'm a Software Developer
                        </Typography>
                    </Grid>
                    <Grid xs="12" container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                        
                        <Typography variant="h5">
                            who have skills in
                        </Typography>
                        
                        
                    </Grid>
                </Grid>
                
            </Container>
            <Container xs="l">
                <Skills />
            </Container>
        </div>
    )
}

export default Content
