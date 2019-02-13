import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from "../components/layout"
export default function Template({data}){
    const post = data.markdownRemark;
    return(
        <Layout>
           <Link to="/blog"></Link>
           <hr/>
           <h1>{post.frontmatter.title}</h1>
           <div dangerouslySetInnerHTML={{__html:post.html}}/>

        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path:String!){
        markdownRemark(frontmatter:{path:{eq:$path}}){
            html
            frontmatter{
                path
                title
            }
        }
    }
`

