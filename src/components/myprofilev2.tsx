function Card({ children }:{children:any}) {
    return (
      <div>
        <div className="card">
            <div className="card-content">  
                { children }
            </div>
        </div>
      </div>
    );
  }

export default function MyProfileV2() {
    return (
      <div>
        <Card>
            <Description person={{ 
                src: 'https://i.imgur.com/OKS67lhm.jpg', 
                alt: 'Aklilu Lemma'
             }}
            size={70}
            />
        </Card>
        <div>
            <Card>
              < About />
            </Card>
        </div>
      </div>
    );
  }

function Description({person, size}:{person:any, size:any}) {
    return (
        <div>  
            <h1>Foto</h1>
            <img
                className="avatar"
                src={person.src}
                alt={person.alt}
                width={size}
                height={size}
            />
        </div>
    );
  }
  
  function About() {
    return (
        <div>
            <h1>Tentang</h1>
            <p>Aklilu Lemma adalah seorang ilmuwan terkemuka dari etiopia 
              yang telah menemukan pengobatan alami untuk skistosomiasis.</p>
        </div>
    );
  }