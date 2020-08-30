import React from 'react'
import { Grid } from '@material-ui/core'
import RecipeReviewCard from './Cards'

function Skills() {
    return (
        <div>
            
            <Grid xs="12" container direction="row" justify="space-around">
                <Grid xs="2">
                <RecipeReviewCard name={"Backend Development"}></RecipeReviewCard>
                </Grid>
                <Grid xs="2">
                <RecipeReviewCard name={"Frontend Development"}></RecipeReviewCard>
                </Grid>
                <Grid xs="2">
                <RecipeReviewCard name={"Database Management"}></RecipeReviewCard>
                </Grid>
                <Grid xs="2">
                <RecipeReviewCard name={"DevOps"}></RecipeReviewCard>
                </Grid>
                <Grid xs="2">
                <RecipeReviewCard name={"Agile Development"}></RecipeReviewCard>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skills
