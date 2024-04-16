import React, {useEffect, useRef } from 'react'
import {Text, View,ScrollView} from 'react-native';

const Home = ({navigation}) => {
    const scrollViewRef = useRef(null);
    React.useEffect(() => {
        
        const refresHomePage = navigation.addListener('tabPress', () => {
            scrollViewRef.current.scrollTo({ y: 0, animated: true });
        });
    
        return refresHomePage;
      }, [navigation]);

  return (
    <ScrollView ref={scrollViewRef}>
        <View>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsum, possimus laborum commodi ipsam quo consequuntur consequatur nam cum ad dolor tempora, voluptatibus suscipit quos magnam, eos molestias tenetur distinctio!
        Perspiciatis quo provident quae numquam rem, veritatis dolore eius autem nulla aperiam sequi praesentium sint illum reiciendis veniam accusantium maiores delectus doloribus? Possimus facilis incidunt sint eaque dolorem excepturi ipsa!
        Nobis odit maxime numquam ea sint natus architecto aliquam molestias iure quidem non illum dicta quam reprehenderit est dolores pariatur voluptate eius dignissimos, debitis voluptatibus omnis aut! Veniam, adipisci! Ex.
        Reiciendis itaque soluta quam minus reprehenderit repellendus voluptate in est quia culpa beatae aliquam consequuntur totam veniam unde facilis, fugit, commodi delectus sequi rem voluptas! Esse repellat voluptatibus ipsa assumenda.
        Quasi repellendus rem facilis. Laudantium, animi atque, libero nihil distinctio minima similique corporis et perferendis impedit ab labore est ex dolorum voluptatum fugit nostrum quo quam quasi necessitatibus aperiam soluta?
        Suscipit, optio saepe. Id natus architecto consectetur alias qui cupiditate rem vero aut corporis tenetur, ea sed exercitationem neque voluptatem excepturi commodi iure beatae nisi. Dolorum ea at assumenda sint?
        Officiis vitae cum aspernatur laboriosam saepe provident minus nihil ea aliquid, incidunt, illo ipsam numquam, esse maxime praesentium. Animi quidem vitae est sit optio odit suscipit corrupti voluptatibus excepturi nam.
        Minus veritatis facere similique cum repudiandae nostrum dolore sequi incidunt quidem rem, voluptate consequatur necessitatibus blanditiis quaerat sunt laboriosam veniam eaque ullam atque rerum totam labore praesentium? Minima, ducimus qui!
        Dicta ad nihil pariatur! Voluptates blanditiis in, natus magni at beatae, nostrum voluptatum, eum dicta mollitia alias animi quas amet quidem adipisci quasi labore eos veniam laborum eveniet explicabo aliquid.
        Est ipsam quo, mollitia culpa, saepe numquam deserunt eos enim quisquam perspiciatis nam aut cum rerum necessitatibus quasi a! A sequi commodi obcaecati placeat nemo, autem deserunt molestias earum error.
        Ratione quae unde, earum sint expedita nemo amet blanditiis esse eveniet mollitia numquam ab obcaecati incidunt dolorem velit fugit facilis ullam, delectus ad sapiente laborum nulla dolores. Excepturi, ipsam ullam!
        Dolores dolorum ducimus perferendis? Error sed omnis quis earum animi voluptas aliquid, nostrum velit aperiam est! Error inventore quasi rem, optio doloremque dolorum ab amet possimus quae perferendis quo dolor!
        Maiores nemo blanditiis nulla dolores recusandae nostrum libero obcaecati aperiam maxime? Maiores, quaerat consectetur earum ad natus laborum fuga nihil nobis voluptatem assumenda tenetur voluptatum! Nobis vel est distinctio ipsum.
        Possimus reprehenderit in, nobis consequuntur nostrum modi amet incidunt architecto ullam reiciendis placeat facilis quasi quaerat distinctio enim soluta minus vero impedit molestias accusamus blanditiis asperiores. Facere velit explicabo est.
        Quas aliquid molestias ad voluptas debitis enim autem quia, cum vitae? Quaerat numquam aliquid ad a, ipsam veritatis praesentium hic aut voluptate voluptates obcaecati odit cumque provident deserunt pariatur voluptatibus?
        Animi perferendis, debitis quod fugiat hic provident maiores illum blanditiis facilis quis dignissimos cum, culpa vero velit ipsa adipisci saepe nobis. Fugit sunt ad laborum quaerat autem illum tempore consectetur.
        Quibusdam magnam veniam numquam quis voluptate sapiente! Necessitatibus illo totam atque consectetur aperiam, ullam quasi minus voluptatibus doloremque! Dolorum dolore, aliquid atque repellat laudantium sunt suscipit illo itaque facilis dignissimos?
        Sit officiis veniam optio obcaecati? Maiores voluptate iusto, labore natus quis temporibus repellat debitis. Sed accusamus ut odit aut voluptas nemo! Debitis molestiae minima veritatis ut dolore odio nulla exercitationem!
        Iste sunt blanditiis explicabo tempore cumque. Natus deleniti recusandae facere? Illum, ut nobis iste, est deleniti eveniet dignissimos veritatis, repudiandae quia officiis assumenda natus tempore sequi sed. Debitis, excepturi repellat.
        Debitis ex magnam porro delectus qui aliquam soluta illum dignissimos. Cum quia officia consectetur aliquam consequuntur veniam maiores voluptatibus et recusandae? Aut magni dicta, accusantium necessitatibus consectetur nemo totam explicabo?
        Esse suscipit minima mollitia recusandae labore aperiam error porro! Cum nisi quas laboriosam, neque aut necessitatibus, quibusdam perspiciatis repellendus sunt officiis asperiores dicta maiores accusamus qui magni, iusto optio illum?
        Sed, sint ab eum nam tempora nulla, delectus consequuntur voluptate, iste quam quisquam hic consectetur. Eligendi esse distinctio accusantium laborum illo! Nobis, reiciendis qui. Deleniti odio ratione fugiat alias esse!
        Autem nihil quia eos voluptatum totam corrupti atque, assumenda ex at eius esse expedita sit voluptates deserunt laborum quae. Sit, distinctio. Sint sequi ipsum, consequatur voluptatum incidunt aut non delectus?
        Exercitationem ut, fuga incidunt vel aspernatur soluta necessitatibus delectus. Laborum commodi, velit voluptatibus odit nam ab, distinctio vitae culpa cumque eaque, esse dolorum autem assumenda tempora quasi deserunt tenetur libero.
        Unde vitae impedit laudantium labore, nesciunt eum asperiores. Minima eos nemo dolor dolores voluptates velit praesentium nihil, voluptatibus rerum pariatur reiciendis exercitationem possimus dolore cupiditate rem est atque sint ipsa.
        Mollitia consequatur, iusto quam iure magni facilis porro placeat, ad unde odio praesentium officiis nam sed consequuntur accusantium commodi iste ullam fugit nulla temporibus? Cum voluptas earum nostrum obcaecati id.
        Voluptate quidem repellendus, adipisci illo soluta dolor molestias. Quae doloremque optio quaerat voluptates minus soluta quas quis magnam, at expedita nisi blanditiis quam architecto dolore libero. Pariatur hic placeat nostrum!
        Obcaecati dolorem ipsa praesentium laudantium culpa impedit iusto qui, minima iure omnis deleniti magnam est, voluptatum autem numquam, unde reiciendis architecto sapiente. Perspiciatis placeat accusantium unde totam nesciunt quaerat saepe.
        Hic, consectetur cum vel debitis exercitationem ab consequatur, rem pariatur itaque in incidunt numquam ipsa voluptates quasi consequuntur ex magni. Corrupti ratione eveniet ipsum omnis delectus illo. Officiis, voluptatibus quos.
        Maxime exercitationem laborum recusandae nobis ratione ut, dolore nemo dolores deleniti? Nesciunt praesentium architecto nisi repudiandae. Dolorum, minus. Praesentium vel dicta exercitationem laboriosam. Id odit sunt optio impedit nemo tenetur.
        Harum, quis laboriosam atque est, pariatur beatae dicta qui eaque dignissimos incidunt quos quam accusantium modi voluptates laudantium ducimus sed quo facilis debitis explicabo minima enim. Ut quidem aut tenetur.
        Vitae recusandae impedit eius facilis eum asperiores, mollitia aliquid quo obcaecati laudantium assumenda modi delectus distinctio, facere quisquam excepturi culpa? Aperiam perspiciatis quo quod deserunt tempore, omnis pariatur hic expedita.
        Incidunt inventore autem laudantium eos voluptatem assumenda libero, quis vitae fugiat alias aspernatur expedita qui animi veniam similique quaerat hic nisi aut. Nisi quae cum dolorum, praesentium nihil blanditiis maxime.
        Delectus laudantium quod, ut id natus quas voluptas magni aliquid earum ad esse ea perferendis accusamus eum accusantium sint aspernatur quaerat et aut maxime! Nostrum in sed dolor ut! Sed.
        Blanditiis dolor autem accusantium adipisci perspiciatis assumenda, quos est quibusdam ea unde quam rerum suscipit expedita omnis. Veniam, error cupiditate molestias aliquid beatae reprehenderit nobis enim obcaecati soluta, quod officiis?
        Doloribus quam, assumenda minima asperiores veniam cum aperiam fugiat maxime iure, nesciunt distinctio alias eius officia hic? Neque provident praesentium tempora libero dolorem est, asperiores qui corporis placeat aut facere.
        Nemo, quod obcaecati. Perferendis officia sit inventore mollitia temporibus! Tenetur id expedita deserunt quis provident cupiditate quasi exercitationem recusandae voluptatem culpa quod tempore temporibus aspernatur ex quisquam, saepe accusantium repudiandae?
        Quis architecto tenetur delectus placeat veritatis a veniam, debitis nemo explicabo non voluptatibus iure, accusantium quod nobis nihil cupiditate asperiores autem, amet alias hic esse. Ratione fuga labore laudantium at.
        Voluptates aliquam repudiandae hic, cumque aut tempore porro blanditiis deserunt sequi inventore architecto, ratione odit unde tenetur omnis, non ab commodi odio quaerat temporibus adipisci. Nisi neque iste harum eius?
        Adipisci aut dicta harum amet beatae et quas! Voluptates dolores velit sequi, at nisi vel qui ullam voluptate distinctio debitis possimus eveniet aut, fugiat, nesciunt a eaque et libero est.
        Illum optio laboriosam sed voluptatum eum quasi nesciunt, consequuntur iure. Numquam excepturi velit temporibus harum deserunt amet nisi eveniet natus totam iure, laborum minus enim corrupti fuga dolores placeat. Similique?
        Sequi similique vitae id, esse velit odio veniam, corrupti iure modi delectus asperiores vel sapiente aspernatur. Asperiores quo saepe eligendi cum omnis! Hic iure mollitia atque rem sit qui aspernatur?
        Fuga sed consectetur error et quaerat, magnam enim blanditiis nobis non saepe tempore quia vero, nulla eius, libero alias dicta quasi accusamus perspiciatis? Animi esse velit et possimus delectus nemo?
        Voluptates quia earum sapiente similique nisi aliquam cupiditate fugit tempore possimus, rerum reiciendis soluta rem. Et fuga reprehenderit odit nemo ab mollitia tempore voluptas perspiciatis amet suscipit. Iusto, a repudiandae?
        Modi dolore voluptate, ullam cupiditate eligendi repellendus explicabo amet expedita itaque repellat provident velit sapiente quas laboriosam excepturi! Voluptatibus laboriosam adipisci dicta. Praesentium eum veniam deleniti soluta saepe voluptatibus repellat.
        Magni reiciendis soluta quia exercitationem. Officia, libero sequi minus dicta quibusdam laboriosam nostrum nisi sunt at asperiores natus quisquam atque quaerat dolor ab vitae quidem nemo eligendi a vel reprehenderit.
        Quidem nesciunt corrupti ipsa dolores voluptate, tempora nulla aut soluta asperiores sapiente ducimus odit reiciendis voluptas quos, itaque provident modi unde, distinctio obcaecati veritatis illum. Sit, deleniti earum. Laboriosam, quis?
        Harum exercitationem vitae libero veritatis. Blanditiis laboriosam aliquid, non mollitia neque assumenda sequi, nostrum voluptate natus quo labore, architecto cumque ad quae minima temporibus rerum iste libero delectus ipsam odit.
        Sit, ratione quia fuga quibusdam quidem, magnam eligendi repellendus aperiam perferendis necessitatibus molestiae quod, ea minima labore veniam consectetur sunt excepturi dicta tempore tempora cumque veritatis blanditiis distinctio quisquam? Totam.
        Nemo, fugiat omnis autem in, pariatur eveniet totam officiis doloribus nihil necessitatibus veritatis veniam placeat nobis numquam tempora ratione aut magnam laboriosam ipsum culpa aspernatur temporibus assumenda et. Voluptatem, ab!
        Asperiores exercitationem mollitia aut, illum eaque quisquam earum magni nesciunt sequi ipsum! Debitis excepturi cupiditate fugiat quia officia inventore necessitatibus odit nostrum, laborum, quos quae nulla asperiores rem aliquid natus.
        Illum incidunt reprehenderit, at iusto soluta qui accusantium deleniti est, exercitationem accusamus aperiam provident, earum eos iste. Fugit nulla sit dolore, adipisci placeat ipsam hic? Sed facere libero quos fuga!
        Consectetur vel sit autem neque similique mollitia facilis eaque, corporis nemo soluta laborum voluptates nostrum ea in, commodi, repudiandae quasi explicabo dicta sed libero dignissimos odio. Voluptate saepe itaque et!
        Natus esse dolore sunt omnis deserunt vitae? Dolore neque sint dignissimos quas dolorum obcaecati rerum voluptatem quae error consequatur. Nobis nihil sed itaque aut mollitia veritatis maxime deserunt possimus dolorem?
        Velit nisi similique sed labore! In assumenda quae officiis qui facilis nisi fugit modi earum numquam error, eligendi unde eum, soluta, sed pariatur reiciendis tempore tempora mollitia alias quam exercitationem!
        Vero nobis repellendus culpa fugiat reprehenderit esse ullam odit unde dignissimos, tempore iure maiores sint ea aspernatur neque incidunt iusto repudiandae recusandae, exercitationem accusamus similique ipsum, laudantium architecto quas. Rem.
        Voluptates iste deleniti saepe? Neque odio cum omnis. At voluptatum praesentium mollitia numquam aut nam eum quia, ullam culpa omnis doloremque modi maxime iste saepe! Perferendis soluta adipisci quia quis.
        Ipsam porro recusandae esse, doloribus sequi numquam unde perferendis! Iure in qui, expedita voluptatibus inventore accusantium ipsa distinctio, iusto natus numquam illum quis. Similique quos alias laudantium animi error vero.
        Nisi nam ex eius explicabo nemo tempora, labore enim delectus quasi sint fugiat molestiae earum quos perferendis ipsam ullam eligendi, dolorum exercitationem cumque laudantium dignissimos. Ratione animi similique molestiae aut?
        Officia nulla alias dolorem maiores sed laborum, voluptatum dolorum odit saepe ad modi necessitatibus atque eaque voluptatibus minima molestias enim quas error ea aspernatur similique. Deleniti reprehenderit eum et quibusdam?
        Doloribus blanditiis sapiente tempora incidunt dolore in odit. Fugiat perferendis quisquam nulla quibusdam, voluptates, distinctio molestiae quis architecto, quas repellendus atque quia. Vel odit, necessitatibus architecto laboriosam optio id consequuntur!
        Accusantium, omnis impedit repudiandae blanditiis dolore, esse error debitis quos vero eius et, sunt dolorum doloribus culpa quisquam eaque voluptas id exercitationem soluta itaque veniam. Error exercitationem tempore nam. Sunt!
        Quam necessitatibus qui placeat! Ea, quos magni maxime nam pariatur totam eligendi amet eum ut, nobis soluta libero eos blanditiis quidem explicabo quas cumque nostrum recusandae reiciendis et aperiam praesentium.
        Impedit porro consectetur, amet velit dolores deserunt est aspernatur necessitatibus. Dignissimos asperiores, nesciunt distinctio dicta harum, architecto ullam obcaecati libero, blanditiis quisquam aliquid cum recusandae id expedita deleniti unde iure?
        Ab, saepe rem! Officia reprehenderit aut excepturi, dolorum nam eos possimus quod quasi ab unde reiciendis minima, sapiente sit? Quae corrupti nihil error veritatis vel obcaecati eos tenetur placeat sint.
        Corrupti, ipsum. Debitis laudantium enim maiores expedita saepe et neque repudiandae reiciendis voluptates corporis, magnam beatae ipsa tempora excepturi nostrum aliquam iste reprehenderit, non, libero nesciunt. Exercitationem impedit tempora velit?
        Id esse debitis accusamus a tempora, culpa praesentium modi minus iure repudiandae ad, labore nemo. Praesentium voluptates, iure doloremque omnis quam labore sit nulla laborum facere a nobis distinctio debitis?
        In perspiciatis nam natus dolores officiis corrupti odit molestias ut pariatur, eius porro modi cum? Ex autem repudiandae enim ipsam, repellendus iste incidunt blanditiis, eaque suscipit praesentium aspernatur, laudantium necessitatibus.
        Accusamus in deserunt aperiam soluta facilis numquam impedit error vel! Sequi laudantium in veritatis optio est sint dolorum explicabo error animi dolores doloribus quod mollitia, perspiciatis tempora maiores dicta fugit.
        Dolor eveniet quia blanditiis sunt qui velit asperiores repellat sint assumenda deleniti. Repellat sequi assumenda delectus eaque cumque maxime cupiditate repellendus fugiat, hic, eveniet eum accusantium. Ducimus recusandae facere ut.
        Esse, velit, similique voluptatum soluta, fugit deleniti quos quae reiciendis cupiditate non sequi nemo! Et voluptas quasi quam error sit labore voluptates, expedita in ad illo, fuga consectetur commodi illum?
        Veniam aliquam alias corporis sequi tenetur vitae quo temporibus eaque explicabo deserunt. Dolorem ipsum cumque dolores? Iure, magnam quod laboriosam, perspiciatis ex quae quos delectus quaerat reprehenderit, libero cupiditate vitae!
        Tempore, voluptas laboriosam dolorem perspiciatis expedita magnam rerum animi reprehenderit aut iste odio ipsum nemo saepe voluptatem, veritatis esse consequatur quos dicta optio at mollitia, possimus quod qui! Iusto, maiores?
        Ab, cumque? Molestias minima ex perspiciatis nihil hic atque est molestiae quod. Debitis maiores animi veniam nostrum ipsa nemo quibusdam aperiam, molestias consectetur, doloremque fuga in inventore vitae laboriosam. Excepturi!
        Fugit, tempore dolores culpa illo itaque iste aliquam maxime, perferendis laboriosam ipsam, eius excepturi. Laudantium tempore eveniet, hic assumenda placeat non suscipit iste reiciendis tempora maxime, odit sapiente, voluptatibus fuga.
        Officiis aperiam fuga laudantium, in cumque non cum qui fugiat a adipisci obcaecati cupiditate veritatis? Ut qui dolores itaque quidem, officia voluptatem reiciendis. Id asperiores quo neque aliquam beatae eos.
        Deleniti laboriosam blanditiis explicabo deserunt doloremque libero voluptatibus! Libero nobis excepturi natus commodi dolore, quod nihil soluta eius aliquam ex. Dicta, officia obcaecati fuga similique eius nulla autem? Delectus, illo!
        Natus vero aliquid quos molestias commodi molestiae odit, nesciunt nobis iste. Deserunt provident eveniet excepturi! Accusamus deleniti porro molestias nemo, doloribus exercitationem voluptatem nulla. Reprehenderit ad ullam impedit quas repellat.
        Error quo beatae sint tenetur fugit molestiae eos rem a at, cupiditate blanditiis vel quam, sapiente officiis doloribus nam possimus aliquam ex qui. Beatae porro voluptatem, accusamus reprehenderit tenetur autem.
        Sunt animi quae dolorum, voluptatibus obcaecati laboriosam error. Nesciunt error porro est, quod beatae itaque eius nihil voluptatem velit? Consequatur, vitae laudantium. Necessitatibus, doloremque maxime. Nesciunt nihil cupiditate obcaecati similique.</Text>
    </View>
    </ScrollView>
    
  )
}

export default Home