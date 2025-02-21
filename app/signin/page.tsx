import Logo from "@/components/Logo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SignInForm from "./SignInForm"
import RegisterForm from "./RegisterForm"
import PaddingContainer from "@/components/PaddingContainer"


const SignInPage = () => {
  return (
    <PaddingContainer>
      <div className="md:-mt-20 md:h-screen md:flex md:flex-col md:items-center md:justify-center">
        <div className="md:w-[60%]">
          <div className="text-primary_yellow font-kaushanScript flex flex-col items-center justify-center">
            <Logo width='75px' height='75px'/>
            <h2 className="text-3xl">RecipeHub</h2>
          </div>    
          <p className="text-white text-center">
            Login or create an account to customize your personal recipe list!
          </p>
        </div>
        <Tabs defaultValue="login" className="w-full md:w-[60%] lg:w-[50%] mt-5">
          <TabsList className="focus:bg-black focus:text-white  bg-black text-primary_yellow w-full font-kaushanScript">
            <TabsTrigger 
              value="login" 
              className="w-full text-lg data-[state=active]:bg-gray-500 data-[state=active]:text-white"
            >
              Log In
            </TabsTrigger>
            <TabsTrigger 
              value="register" 
              className="w-full text-lg data-[state=active]:bg-gray-500 data-[state=active]:text-white"
            >
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="text-white mt-5">
            <SignInForm/>
          </TabsContent>

          <TabsContent value="register" className="text-white mt-5">
            <RegisterForm />
          </TabsContent>
        </Tabs>

      </div>
    </PaddingContainer>
  )
}

export default SignInPage