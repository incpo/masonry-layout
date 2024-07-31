import './App.css';
import { images } from './config';

const MAX_COLUMNS = 3

function getColumns(colIndex: number) {
  // Instead of images you can replace it with any other data source
  return images.filter((_, idx) => idx % MAX_COLUMNS === colIndex);
}

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {Array.from({ length: MAX_COLUMNS }, (_, colIndex) => (
        <div key={colIndex} className="grid gap-4">
          {getColumns(colIndex).map((img, idx) => (
            <div key={idx} className="replace-with-your-own-component">
              <img loading="lazy" src={img.src} height={img.height} width={img.width} alt={img.alt} className="h-full w-full rounded-xl hover:scale-[101%] duration-300 ease-in-out object-cover" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
