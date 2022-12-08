import { Banner, Footer, Navbar, NetflixOriginal, Row } from '../../Components'

import {
  UPCOMING,
  ACTION,
  HORROR,
  ROMANCE,
  COMEDY,
  TOP_RATED,
} from '../../library'

export function Browse() {
  return (
    <div>
      <Navbar />
      <Banner />
      <NetflixOriginal />
      <Row URL={UPCOMING} name={'Up Coming'} />
      <Row URL={ACTION} name={'Action'} />
      <Row URL={ROMANCE} name={'Romance'} />
      <Row URL={HORROR} name={'Horror'} />
      <Row URL={COMEDY} name={'Comedy'} />
      <Row URL={TOP_RATED} name={'Top On Netflix'} />
      <Footer />
    </div>
  )
}
