import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'AlbaSS18',
        name: 'Alba Serena Suárez',
        isFollowing: true
    }
]

export function App(){
    return (
        <>
            {
                users.map(({userName, name, isFollowing}) => {
                    return (
                        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
            {/* Comentarios */}
        </>
    )
}