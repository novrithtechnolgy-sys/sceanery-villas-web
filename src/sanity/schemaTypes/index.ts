import { type SchemaTypeDefinition } from 'sanity'
import villacarosal from './villaCarosal'
import { experienceGroup } from './experienceGroup'
import villa from './villa'
import gallerySection from './gallerySection'
import galleryPhoto from './galleryPhoto'
import category from './category'
import post from './post'
import villas from './villas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [villacarosal, experienceGroup, villa, gallerySection, galleryPhoto, category, post, villas],
}
