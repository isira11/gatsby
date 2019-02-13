import React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby"


const Blog = ({data}) => (
  <Layout>  
    <h1>Lastest Post</h1>
    {data.allMarkdownRemark.edges.map(post =>(
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small> Posted by {post.node.frontmatter.path}</small>

            <br/>
            <br/>
            <Link to={post.node.frontmatter.path}>read more</Link>
            <br/>
            <br/>
            <hr/>
        </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
query BlogIndexQuery 
{
        allMarkdownRemark{
          edges{
            node{
              id
              frontmatter
              {
                path
                title
              }
              excerpt
            }
          }
        }
      
      
}
`




export default Blog
