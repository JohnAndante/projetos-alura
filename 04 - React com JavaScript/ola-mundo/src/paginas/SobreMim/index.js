import styles from './SobreMim.module.css'

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

const SobreMim = () => {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo={"Sobre mim"}
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o <strong>Cleiton</strong>!
      </h3>

      <img src={fotoSobreMim} alt="Foto do Cleiton" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Bacon ipsum dolor amet salami pork fatback chislic jerky venison drumstick pig chicken landjaeger. Jerky ham hock buffalo turducken flank cow, beef tenderloin pastrami capicola. Short ribs bresaola ham swine ground round brisket. Jowl leberkas shankle kielbasa doner ham ribeye fatback sausage turkey rump hamburger pastrami ball tip pork chop. Kielbasa pork prosciutto short loin bacon short ribs chuck burgdoggen chislic ribeye sausage. Beef ribs pancetta short loin rump, strip steak ball tip andouille sirloin pork belly swine jerky kevin. Meatball kevin bresaola, pig chicken pork belly t-bone leberkas doner venison buffalo.
      </p>

      <p className={styles.paragrafo}>
        Bresaola porchetta cow meatball. Sirloin ham hock pork, doner shankle landjaeger filet mignon spare ribs sausage pork belly jerky chislic prosciutto pancetta. Pork chop biltong salami capicola. Sirloin swine beef kevin spare ribs leberkas. Pork chop corned beef spare ribs chicken. Leberkas spare ribs chicken bresaola. Venison meatball pork chop ball tip prosciutto, filet mignon boudin.
      </p>

      <p className={styles.paragrafo}>
        Hamburger landjaeger pork belly meatloaf jerky ground round strip steak. Ham hock picanha ribeye, pig buffalo salami flank pork chop. Swine ball tip short ribs capicola, chicken ham spare ribs strip steak. Andouille cupim venison bacon tri-tip chislic.
      </p>

      <p className={styles.paragrafo}>
        Shankle drumstick tail ham hock, shoulder turducken ball tip chislic spare ribs. Capicola ground round swine chislic. Shankle sirloin burgdoggen, frankfurter salami rump pork loin picanha ribeye chislic bacon bresaola meatloaf. Jerky meatloaf tenderloin buffalo prosciutto beef landjaeger ball tip swine bacon sirloin. Drumstick porchetta jowl leberkas shank.
      </p>

      <p className={styles.paragrafo}>
        Capicola burgdoggen fatback beef ribs. Rump boudin andouille, cupim landjaeger strip steak sausage tongue bresaola turducken chislic. Porchetta spare ribs cow, venison corned beef boudin tenderloin kevin short ribs turkey andouille. Hamburger corned beef ham turducken jowl chicken. Salami meatball ball tip, tongue burgdoggen chislic short loin turducken ham hock brisket landjaeger fatback drumstick. Brisket venison short ribs shoulder, pork belly filet mignon sirloin hamburger tongue swine beef ribs drumstick ham hock ball tip. Cupim kevin shankle shank tongue ham tri-tip cow bresaola ham hock turducken flank capicola meatball.
      </p>


    </PostModelo>
  )
}

export default SobreMim;
