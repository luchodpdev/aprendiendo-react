import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo Heraldo'  ,
      isFollowing: true
    },
    {
      userName: 'luchodpdev',
      name: 'Luciano Miguel De Pasquale'  ,
      isFollowing: true
    },
    {
      userName: 'menem',
      name: 'Carlos Menem'  ,
      isFollowing: true
    }
]
export function App () {
    
    return (

        <section className='App'>
           { 
            users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard 
                      key={userName}
                      userName={userName}
                      initialIsFollowing={isFollowing}
                      >
                     {name}
                    </TwitterFollowCard>
                 ))
            }
        </section>
    )
}