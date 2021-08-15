import spinner from '../../image/spinner.gif'

const LoadScreen = () => (
  <div className="flex-wrap text-center">
    <iframe
      src="https://giphy.com/embed/3oEjI1erPMTMBFmNHi"
      frameBorder="0"

      className="w-full mt-6"
      allowFullScreen
    >
    </iframe>
    <p className="italic text-xs">
      <a href="https://giphy.com/gifs/game-of-thrones-3oEjI1erPMTMBFmNHi">via GIPHY</a>
    </p>
  </div>
);

export default LoadScreen
