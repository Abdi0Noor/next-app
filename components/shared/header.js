import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component {

    render() {
        return (
            <div>
                
            <Link href="/"><a>home</a></Link>
            <Link href="/blogs"><a>blogs</a></Link>
            <Link href="/about"><a>about</a></Link>
            <Link href="/resume"><a>resume</a></Link>
            <Link href="/portfolio"><a>portfolio</a></Link>
            
            </div>
            
        )
    }
}

