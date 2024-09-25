import { auth, signOut } from "@/auth";
const SettingsPage = async() => {
    const session = await auth();

    return (
        <div className="flex items-center justify-center h-screen">
            {JSON.stringify(session, null, 2)}
            <form action={async()=>{
                "use server"
                await signOut()
            }} >
                <button type="submit" className="provider-button">Logout</button>
            </form>
        </div>
    )
}

export default SettingsPage;