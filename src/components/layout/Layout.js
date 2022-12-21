import images from '../../assets/images';

export default function Layout({ children }) {
  return (
    <div style={styles.layout}>
      <div style={styles.background}>
        <img
          alt='background'
          src={images.background}
          style={styles.backgroundImage}
        />
      </div>
      <main style={styles.content}>{children}</main>
    </div>
  );
}

const styles = {
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%'
  },
  layout: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#1a1a1a',
    overflow: 'auto'
  },
  content: {
    position: 'relative',
    zIndex: 1
  }
};
