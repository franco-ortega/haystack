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
      {children}
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
    width: '100%',
    flex: 1
  },
  layout: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
    background: '#1a1a1a'
  }
};
