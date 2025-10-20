<!-- Github api ka use krke hm data chaiye alg alg human ka hm uske liye uska pura url same rkhege but usa nm dynamic rkhege jo hm dalege wo show ho jayga

Ab m ye chahta hu ki 
http://localhost:1234/Github => iss url ke baad m jiska nm likhu uska data mujhe mil jayga
http://localhost:1234/Github/bcalloway => koi h ye iski profile m h to mye chahta hu ki ye dynamic rhe or pura url same rhe but ye hm yha pr jo nm dale wo show ho jana chaiye 

<Route path="/Github/:name" element={<Github/>}></Route> asa name ko hm dynamic kr skte h iss name ki jgah kuch bhi de skte h jo denge uska data show ho jayga 

But user ka detais milegi kha se wo mileg Github file se hm chahte h ki user ki detail ko display krana chahte h 
ab jo hmne "/Github/:name" name bheja h ye catch krna hoga or iski informatino fetch krne ke liye use hota h hmara(use catch krega hmara useParam hmara dynmic parameter ko catch krta h or phir root create krke deta h)

const data = useParams() => Ye dynamic root create krke deta h 
 use param hm lakr deta h ek object or object ke andr ek properties h name uske andr nm aya hua h jo hmne de rkha h 
mujhe name wale ke fetch krna h to m asa bhi kr skta hu 
const {name} = useParams()

Note=> Agr hm apne kisi bhi state varibles m null value de rkeh or fetch se kuch bhi data access krna chate h to hme jha bhi data access uske piceh hi ? ye lga de asa // console m error ayegi (cannot read properteis of null (reading 'avatar_url' at Github)

Ye error isliye arri kyuki fetch(function call) wala function to useEffect ke andr h wo to sbse baad clega or state variables m value h isliye hi error dekha rha h usse bachne ke liye {profile?.login} ye lga de ?

<div>
        <img src={profile?.avatar_url}alt="avatar" width={150}/>
        <h1>{profile?.login}</h1>
</div>  ? ye kheta h agr null hua to agge jne ki jarurat nhi h yhi ruk jna bs


<!-- Custom Hooks in React -->
<!-- Custom hook hota h apna khud ka Hooks create krna Jo code hm bar bar use krna hota h usse ek new file m new hook bna kr add krdo or phir usko kisi bhi file ke liye use krlo or jis bhi m bhi use krna ho usme usko import krke phir jis file ko jo cahiye wo return krdo  -->