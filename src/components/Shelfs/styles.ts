import styled from 'styled-components'

export const ShelfsElement = styled.div`
  padding: 3.2rem 0;
  background: var(--white-weak);
  
  .slick-slider {
    .slick-prev {
      left: -57px;
    }
    .slick-next {
      right: -57px;
    }
    .slick-list {
      padding: 0 20% 0 0 !important;
    }

    .slick-slide {
      padding: 0 8px;
      box-sizing: border-box;
    }
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`


