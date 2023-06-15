import Icon1 from './assets/Icon1.png';
import Icon2 from './assets/Icon2.png';
import Icon3 from './assets/Icon3.png';
import Icon4 from './assets/Icon4.png';
import Icon5 from './assets/Icon5.png';
import Icon6 from './assets/Icon6.png';
import Plant from './assets/Plant Services.png';
import Team1 from "./assets/Matheus.jpg";
import Team2 from "./assets/Gui.jpg";
import Team3 from "./assets/Julia.jpeg";
import Team4 from "./assets/Pedro.jpg";
import Team5 from "./assets/Marcos.jpeg";
import Avatar from "./assets/Avatar.png";
import './global-styles/App.css';
import NavBar from './components/NavBar';
import SectionTitle from './components/SectionTitle';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
function App() {

  const [equacoesIniciais, setEquacoesIniciais] = useState([])
  const [equacoes, setEquacoes] = useState([])

  useEffect(() => {
    const fetchEquations = async () => {
      try {
        const response = await fetch(
          'url'
        );
        const data = await response.json();
        console.log(data);
        setEquacoesIniciais(data);
        setEquacoes(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEquations();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <section className='Banner'>
        <text className='Title'>Verifique o balanceamento das suas equações químicas</text>
        <div className='Search'>
          <input
            className='Input'
            type='text'
            value={equacoes}
            placeholder='Digite as equações...'
          />
          <button
            className='Button'
          >
            Buscar
          </button>
        </div>
        <div>
          <ul></ul>
        </div>
      </section>

      <section id='Services'>
        <SectionTitle
          color1="Confira nossos serviçõs e "
          color2="como eles podem te ajudar"
        />
        <div className='Row'>
          {/* A proxima div é visivel somente em dispositivos WEB. */}
          <div className='ItemList'>
            <div className='Column'>
              <div className='Row'>
                <div className='TextBox'>
                  <text className='ItemTitleLeft'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemTextLeft'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
                <img
                  src={Icon1}
                  className='Icon'
                />
              </div>
              <div className='Row'>
                <div className='TextBox'>
                  <text className='ItemTitleLeft'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemTextLeft'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
                <img
                  src={Icon2}
                  className='Icon'
                />
              </div>
              <div className='Row'>
                <div className='TextBox'>
                  <text className='ItemTitleLeft'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemTextLeft'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
                <img
                  src={Icon3}
                  className='Icon'
                />
              </div>
            </div>
          </div>

          {/* A proxima div é visivel somento em dispositivos moveis. */}
          <div className='ItemListMobile'>
            <div className='Column'>
              <div className='Row'>
                <img
                  src={Icon1}
                  className='Icon'
                />
                <div className='TextBox'>
                  <text className='ItemTitle'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
              </div>
              <div className='Row'>
                <img
                  src={Icon2}
                  className='Icon'
                />
                <div className='TextBox'>
                  <text className='ItemTitle'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
              </div>
              <div className='Row'>
                <img
                  src={Icon3}
                  className='Icon'
                />
                <div className='TextBox'>
                  <text className='ItemTitle'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src={Plant}
              className='Plant'
            />
          </div>

          <div>
            <div className='Column'>
              <div className='Row'>
                <img
                  src={Icon4}
                  className='Icon'
                />
                <div className='TextBox'>
                  <text className='ItemTitle'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
              </div>
              <div className='Row'>
                <img
                  src={Icon5}
                  className='Icon'
                />
                <div className='TextBox'>
                  <text className='ItemTitle'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
              </div>
              <div className='Row'>
                <img
                  src={Icon6}
                  className='Icon'
                />
                <div className='TextBox'>
                  <text className='ItemTitle'>
                    Lorem Ipsum
                  </text>
                  <text className='ItemText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula varius nulla eget iaculis. Mauris luctus velit in libero faucibus,
                    et vehicula turpis iaculis.
                  </text>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id='Team'>
        <SectionTitle
          color1="Desenvolvido pelos melhores, "
          color2="confira nosso time"
        />

        <div className='Row'>
          <div className='Column'>
            <div className='Profile'>
              <img
                src={Team1}
                className='ProfilePicture'
              />
              <text className='Name'>Matheus</text>
              <text className='Position'>Dev. Front-End</text>
            </div>
            <div className='Profile'>
              <img
                src={Team3}
                className='ProfilePicture'
              />
              <text className='Name'>Julia</text>
              <text className='Position'>Product Designer</text>
            </div>
          </div>

          <div className='Column'>
            <div className='Profile'>
              <img
                src={Team2}
                className='ProfilePicture'
              />
              <text className='Name'>Guilherme</text>
              <text className='Position'>Dev. Back-End</text>
            </div>
            <div className='Profile'>
              <img
                src={Team4}
                className='ProfilePicture'
              />
              <text className='Name'>Pedro</text>
              <text className='Position'>Product Designer</text>
            </div>
          </div>

          <div className='Column'>
            <div className='Profile'>
              <img
                src={Team5}
                className='ProfilePicture'
              />
              <text className='Name'>Marcos</text>
              <text className='Position'>Quality Analyst</text>
            </div>
            <div className='Profile'>
              <img
                src={Avatar}
                className='ProfilePicture'
              />
              <text className='Name'>Victor</text>
              <text className='Position'>Data Analyst</text>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default App;