import React, { useEffect, useState } from 'react';
import styles from './postimagegallery.css';
// @ts-ignore
import { Carousel } from 'react-carousel-minimal';


interface Props{
  mediaMetaData: object;
  galleryData: object[];
}

export function PostImageGallery({ mediaMetaData, galleryData }: Props) {

  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    }
  ];
  const slideNumberStyle = {
    position: 'absolute',
    color: 'var(--white)',
    top: '5px',
    right: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  }
  const [urls, setUrls] = useState<object[]>([]);
  const [bool, setBool]= useState(false);

  useEffect(()=>{
    for(let i=0; i<galleryData.length; i++){
      let a =String(Object(mediaMetaData)[Object(galleryData[i]).media_id].s.u).replaceAll('amp;', '');
      let b: object = {
        image: a
      };
      setUrls(prevClidren => prevClidren.concat(b));
    }
    setBool(true);

  },[])

  return (
<div className={styles.container}>
{bool===true && (<div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 0"
        }}>
          <Carousel
            data={urls}
            width='100%'
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            automatic={false}
            dots={false}
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              margin: "0",
              position: 'relative',
            }}
          />
        </div>
      </div>)}
</div>
  );
}
