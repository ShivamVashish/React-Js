<!-- Hm isme style likhege ek object bnakr  -->
<!-- Agr hm kuch html m likh rkha h or React m kuch bhi nhi likha rkha to wo show hoga agr react m kuch bhi render kra rkha h to phir html ke jo bhi div ke andr element hoge unsbko hta dega 

Render ==>
Render ka means hi ye h ki jo previous deta h un sbko htao or jo m tumhe lakr de rha hu usko rkho bss   -->
<!-- iss wjah se hmara element1 show nhi hua element1 or baad m hme jo element2 render kia h wo isliye hi show hua h usne previous content ho hta dia -->

<!-- Multiple ko dalne ke liye root container m sbse phle div create krege phir uske child element m array m likh denge or phir uss div ko hi render kra denge root container m  -->

<!-- Nested Children like ek div ke do children phir unke lo phir uska ek asa krke kse bnayge dekho ab -->

<!-- Note ( React ke andr hm HTML Ki trah code likh skte h Using JSX(ye additional functionality lekr ayi h iska use krke hm HTML ki trah code likh skege HTMl ki form m but ek babel hota h jisko hm compiler bolte h wo hmara jsx code ko convert krta h React.createElement ko or babel jo hota h wo react ka part nhi h)) -->

<!-- JSX ye kheta h ki jha jha bhi tumne HTML ki trah react m code likha h usko m convert kr dunga React element m but ye hm pdhege next lecture m hm phele ye dkehan chahte h ki isme problem kya thi-->

<!-- Note 
Hmara main goal ye h yha pr ki hmara code optimize hona chaiye or hme apne code km se km rkhna h kyuki jitna km code hoga utna hi fast execute hoga hmara or iske liye use hota h hmara Bundler-->

<!-- Bundler Ye ek Tool hai jo tumhare multiple JS/React files + assets (HTML, CSS, images, etc.) ko ek ya do optimized files me convert kar deta hai.(popular bunder webpack,vite,Parcel)
Bunder : khud handle krta h Dependencies basically wo external code, libraries, ya modules hote hain jo tumhare program ko chalane ke liye chahiye.ye hmara code m extrac space vgera sb ku handle kr leta h
Ye kya krta h ye hmare code ko pdhta h or uska ek bundle bna kr hme de deta h or kheta h ki iss code ko ap apne production m use kr skte ho cdn ka use krne se hmara file bht bdi ho jati h isliye hm bundler ka use krte h production ke liye -->

<!-- Bundler(Parcel) download krna h to chatgpt se puch lo 
package.json() ke pass rheta h hmara meta detail hamri folder ki sbhi details

NPM(Node Package Manager)
NPM ke pass hmara sbhi code hota h jo  use web development se related ye database smj lo
jo hmara parcel ka code hota haina wo hmara npm ke pass rkha hua h , typeScript ka bhi code ,development se related code yha pr rkha h npm ke pass or unko hi hm bolte h packages jo bhi chaiye mere se le liye meri command use kr liye isme hm apna code bhi use kr skte h ye open source h kyuki 


npm init (iske inder sbhi details hoti h npm ki)
ek baat btao mne node modules m sirf parcel mnga tha ye sb kyu aa gye extra folder mere ye sb mere km ke h parcel jo haina wo khud ka code use kr hi rha h dusre foldero ka bhi krra h unhe hi hm khete h dependencies kyu we kisi or pe denpend ye kisi or pe wo kisi or pe chain bn ri h isliey aye h ye folder itne

Parcel khud kisi or code pe depend h or wo code bhi kisi or code pe depend h isliye hmare code m ye sb kuch ata h yha pr ek dusre pr depend h sb or ye sb node modules ke andr jate h

React Download krne ke liye kre
npm install react 
npm install react-dom


Package.json (kya h ye isme basic detail hoti h b ){ iske upr hmare project se related sbhi information rheti h
dependecies ke niche nikh h ki ye mera project dependent h 
project depend h parcel pe
react parcel ke upr dependent h
react-dom  react ke upr dependent h

Interview Line (perfect summary):

“In a React project, ReactDOM depends on React because it renders React components to the browser DOM.
React depends on the bundler (like Parcel or Webpack) to compile and package the code for the browser.”

}

ye jo version hote ye (Semantic Versioning)
version:18.2.3 (first value = Major & second Minor & third patch)

patch

patch ka means hota h jb hmare code m kuch bug ata h or version aa gya new jse 18.2.4 aa gya to smj lo ek wha pe koi bug fixed kia h 

Minor 
Minor hota h hmara jb hm apne code m kuch features m change krte h kuch functinality add krte h(features changes)

Major 
jb ye change hota h to hmara code ft jata h phir uske according hme pura code m (breaks changes)change krna hota h

Interview question 
“If your library has a bug fix, which version should you increment?” → Patch
“If you add a new backward-compatible feature?” → Minor
“If you make changes that break backward compatibility?” → Major

^(caret) ye kheta h ki m apne andr minor or patch tk le skta hu accept kr skta hu
~(tilde) ye kheta h ki m sirf patch wale change hi lunga

Package-lock.json
iske andr exact jitne bhi packages haina unke exact version rkhe hua h