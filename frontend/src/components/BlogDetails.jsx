import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './data/blogData';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Post Not Found</h2>
        <Link to="/blog" className="read-more-btn">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-details-page">
      <section className="blog-hero">
        <div className="container">
          <h1 className="hero-title">{post.title}</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="chevron">»</span>
            <Link to="/blog">Blog Grid</Link>
            <span className="chevron">»</span>
            <span>{post.title}</span>
          </div>
        </div>
      </section>

      <section className="blog-details-content">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main-side">
              <div className="post-details-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                
                <div className="post-meta-detailed">
                  <span className="blog-author">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                    </svg>
                    By {post.author}
                  </span>
                  <span className="blog-date">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="currentColor"/>
                    </svg>
                    {post.date}
                  </span>
                </div>

                <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                <div className="post-footer">
                  <div className="post-tags">
                    <strong>Tags:</strong>
                    <Link to="#">Business</Link>
                    <Link to="#">Digital</Link>
                    <Link to="#">Tech</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Reuse standard sidebar styles */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget search-widget">
                <h3 className="widget-title">Search</h3>
                <div className="search-box">
                  <input type="text" placeholder="Search here" />
                  <button className="search-btn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                      <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="sidebar-widget category-widget">
                <h3 className="widget-title">Category</h3>
                <ul className="category-list">
                  <li><a href="#"><span>Motion and Graphics</span><span>(4)</span></a></li>
                  <li><a href="#"><span>Digital Marketing</span><span>(3)</span></a></li>
                  <li><a href="#"><span>UI/UX</span><span>(1)</span></a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;