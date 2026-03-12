import { type SchemaTypeDefinition } from 'sanity'
import villacarosal from './villaCarosal'
import { experienceGroup } from './experienceGroup'
import category from './category'
import post from './post'
import villas from './villas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [villacarosal, experienceGroup, category, post, villas],
}
