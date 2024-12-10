import { createFileRoute } from '@tanstack/react-router';
import blogImgUrl from '../../assets/images/blogImg.png';
import style from '../../styles/modules/blogDetail.module.scss';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import StickyDonateBtn from '../../components/StickyDonateBtn';

export const Route = createFileRoute('/blogs/$blogId')({
  component: RouteComponent,
});

function RouteComponent() {
  const blog = {
    id: 1,
    title: 'This Page Describes The Event',
    subTitle: '8 Brewery Drive, Hudson, NH 03051, USA',
    date: '21 DEC 2024',
    dateTime: '2021-09-03T08:30',
    img: blogImgUrl,
    content: `<h1>Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque.</h1>
<p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>

<p>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</p>
<p>Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>

<p>Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>

<h2>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
<ul>
  <li>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis.</li>
  <li>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</li>
  <li>Mauris morbi sed dignissim a in nec aliquam fringilla et.</li>
  <li>Consectetur feugiat quis hac enim nullam in enim.</li>
</ul>

<h2>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
<p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>

<p>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</p>
`,
  };
  const sanitizedContent = DOMPurify.sanitize(blog.content);
  return (
    <>
      <section className={`mainGrid ${style.blogHeader}`}>
        <div className="content firstSectionGap">
          <time dateTime={blog.dateTime}>{blog.date}</time>
          <h1 className={style.title}>{blog.title}</h1>
          <p className={style.subTitle}>{blog.subTitle}</p>
          <div className={style.imgWrapper}>
            <img
              src={blog.img}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={`mainGrid ${style.blogContent}`}>
        <div className="content">{parse(sanitizedContent)}</div>
      </section>
      <StickyDonateBtn />
    </>
  );
}
