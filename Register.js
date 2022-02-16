export default function App() {

  const [isSignedIn,setIsSignedIn] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const RegisterUser =() =>{
createUserWithEmailAndPassword(authentication, email, password)
.then((re)=>{
console.log(re);
setIsSignedIn(true)
})
.catch((re)=>{
  console.log(re);
  
  })
  }
  return (
   <View>
 <TextInput placeholder='Email'value={email} onChangeText={text=>setEmail(text)}/>
 <TextInput placeholder='password'value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>

 <Button title='Register' onPress={RegisterUser}/>

 <Button title='Sign in' />
 


   </View>
<View> </View>
  );
}
