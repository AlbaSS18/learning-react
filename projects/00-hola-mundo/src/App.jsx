import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <>
            <TwitterFollowCard userName="AlbaSS18" initialIsFollowing>
                Alba Serena Suárez
            </TwitterFollowCard>
            {/* Comentarios */}
            <TwitterFollowCard userName="midudev" initialIsFollowing={false}>
                Miguel Ángel Durán
            </TwitterFollowCard>
        </>
    )
}