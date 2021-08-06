import React from 'react';
import Naviga from '../components/Naviga';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Project from '../components/Project';
import SocialNetwork from '../components/SocialNetwork';
import Mouse from '../components/Mouse';


export const Project1 = () => {
return (
<main>
<a href="/signup" className="sign">
     Sign up</a>
       
      <a href="/signup" className="sign">Sign in</a>
<Mouse/>
<div className="project">
    <Naviga/>
    <SocialNetwork/>
    <Logo/>
    <Project projectNumber={0}/>
    <ButtonsBottom left={'/'} right={'/project-2'}/>
</div>
</main>
)
}

export const Project2 = () => {
    return (
    <main>
              <a href="/signup" className="sign"
         class="flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1">
        Sign up</a>
       
      <a href="/signup" className="sign"
         class="flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1">Sign in</a>
        <Mouse/>
    <div className="project">
    <Naviga/>
    <Logo/>
    <SocialNetwork/>
    <Project projectNumber={1}/>
        <ButtonsBottom left={'/project-1'} right={'/project-3'}/>
    </div>
    </main>
    )
    }

export const Project3 = () => {
        return (
        <main>
                  <a href="/signup" className="sign"
         class="flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1">
        Sign up</a>
       
      <a href="/signup" className="sign"
         class="flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1">Sign in</a>
            <Mouse/>
        <div className="project">
        <Naviga/>
        <SocialNetwork/>
        <Logo/>
        <Project projectNumber={2}/>
            <ButtonsBottom left={'/project-2'} right={'/project-4'}/>
        </div>
        </main>
        )
        }
export const Project4 = () => {
            return (
            <main>
                      <a href="/signup" className="sign"
         class="flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1">
        Sign up</a>
       
      <a href="/signup" className="sign"
         class="flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1">Sign in</a>
                <Mouse/>
            <div className="project">
            <Naviga/>
            <SocialNetwork/>
            <Logo/>
            <Project projectNumber={3}/>
            <ButtonsBottom left={'/project-3'} right={'/Contact'}/>
            </div>
            </main>
            )
            }