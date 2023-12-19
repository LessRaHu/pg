import React from "react";
import { ImageList, ImageListItem, Typography, Grow } from "@mui/material";
import InfoCard from "../../components/InfoCard/InfoCard";
import styles from "./Home.module.css";
import itemData from "./data";

export function Home(props) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${styles.mainContainer} ${styles.darkBackground}`}>
      <Typography variant="h4" gutterBottom>
        Acuaponía alimentos sostenibles en formas alternativas
      </Typography>

      <ImageList cols={3} rowHeight={500} className={styles.ImageList}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.key}>
            <Grow in={isLoaded} style={{ transformOrigin: '0 0 0' }} timeout={index * 300}>
              <div style={{ transformOrigin: '0 0 0' }}>
                <InfoCard
                  desc={item.desc}
                  title={item.title}
                  date={item.date}
                  avatar={item.avatar}
                  image={item.image}
                  content={item.content}
                />
              </div>
            </Grow>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
