import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import splideStyles from '../styles/modules/splide.module.scss';
// @ts-expect-error
import '@splidejs/react-splide/css';
import logoUrl1 from '../assets/images/RandomLogo1.png';
import logoUrl2 from '../assets/images/RandomLogo2.png';
import logoUrl3 from '../assets/images/RandomLogo3.png';
import logoUrl4 from '../assets/images/RandomLogo4.png';

const SupporterSlide = () => {
  const logoUrlArray = [logoUrl1, logoUrl2, logoUrl3, logoUrl4];
  return (
    <>
      <Splide
        aria-label="Supporter Logos"
        options={{
          type: 'loop',
          // autoWidth: true,
          perPage: 4,
          arrows: false,
          gap: '2rem',
          autoScroll: {
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}>
        {logoUrlArray.map((str, index) => (
          <SplideSlide key={str + index}>
            <div className={splideStyles.logoWrapper}>
              <img
                src={str}
                alt={`Image ${index}`}
                className={splideStyles.logoImg}
                loading="lazy"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default SupporterSlide;
