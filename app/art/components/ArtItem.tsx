import { ArtObject } from "../utils";
import styles from "./ArtItem.module.css";

interface ArtItemProps {
  art: ArtObject;
}

export default function ArtItem({ art }: ArtItemProps) {
  return (
    <div className={styles.artItem}>
      <div className={styles.imageContainer}>
        {art.primaryImage ? (
          <img
            src={art.primaryImage}
            alt={art.title || "Artwork"}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.noImage}>No Image Available</div>
        )}
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{art.title || "Untitled"}</h2>
        {art.artistDisplayName && (
          <p className={styles.artist}>
            <strong>Artist:</strong> {art.artistDisplayName}
          </p>
        )}
        {art.objectName && (
          <p className={styles.property}>
            <strong>Type:</strong> {art.objectName}
          </p>
        )}
        {art.medium && (
          <p className={styles.property}>
            <strong>Medium:</strong> {art.medium}
          </p>
        )}
        {art.objectDate && (
          <p className={styles.property}>
            <strong>Date:</strong> {art.objectDate}
          </p>
        )}
        {art.dimensions && (
          <p className={styles.property}>
            <strong>Dimensions:</strong> {art.dimensions}
          </p>
        )}
        {art.culture && (
          <p className={styles.property}>
            <strong>Culture:</strong> {art.culture}
          </p>
        )}
        {art.period && (
          <p className={styles.property}>
            <strong>Period:</strong> {art.period}
          </p>
        )}
        {art.country && (
          <p className={styles.property}>
            <strong>Country:</strong> {art.country}
          </p>
        )}
        {art.classification && (
          <p className={styles.property}>
            <strong>Classification:</strong> {art.classification}
          </p>
        )}
        {art.creditLine && (
          <p className={styles.creditLine}>
            <strong>Credit:</strong> {art.creditLine}
          </p>
        )}
      </div>
    </div>
  );
}

