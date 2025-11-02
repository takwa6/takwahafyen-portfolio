"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import React from "react";

const tags = [
  { name: "Web Design", path: "/" },
  { name: "Social Media", path: "/" },
  { name: "Product", path: "/" },
];

const socialLink = [
  {
    icon: "fab fa-github",
    color: "github-color",
    link: "https://github.com/takwa6",
  },
  {
    icon: "fab fa-linkedin-in",
    color: "linkedin-color",
    link: "https://www.linkedin.com/in/takwa-hafyen-472264282",
  },
  
];

export default function BlogAreaModal() {
  const { blogInfo } = useSelector((state) => state.blog ?? {});

  if (!blogInfo) return null;

  return (
    <div
      className="modal fade"
      id="exampleModal-b1"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModal-b1"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="close-icon float-right pt-10 pr-10">
            <button
              type="button"
              className="close d-inline-block"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fa fa-times" />
              </span>
            </button>
          </div>

          <div className="modal-content border-0">
            <div className="modal-body pl-50 pr-50 pt-10 pb-50">
              <div className="blog-modal-img" style={{ position: "relative", width: "100%", height: 400 }}>
                {/* Utilisation de Image avec fill pour éviter width/height = 0 */}
                <Image
                  src={blogInfo.imgUrl || "/images/default-blog.jpg"}
                  alt={blogInfo.title || "blog post image"}
                  fill
                  className="object-cover w-100 h-100"
                  sizes="100vw"
                />
              </div>

              <div className="row align-items-center justify-content-center">
                <div className="col-12">
                  <div className="content-wrapper">
                    <h2 className="modal-title text-center">
                      {blogInfo.title || "Let’s make the beginning to mankind to save the world again"}
                    </h2>

                    <ul className="blog-meta text-center mb-30">
                      <li>
                        <Link href="/" className="meta-text-color openS-font-family">
                          <span className="theme-color mr-1">
                            <i className="fas fa-folder-open" />
                          </span>
                          {blogInfo.category}
                        </Link>
                      </li>
                      <li>
                        <span className="meta-text-color openS-font-family d-block">
                          <span className="theme-color mr-1">
                            <i className="fas fa-calendar-alt" />
                          </span>
                          {/* tu peux remplacer par blogInfo.date si disponible */}
                          June 21, 2022
                        </span>
                      </li>
                      <li>
                        <span className="meta-text-color openS-font-family d-block">
                          <span className="theme-color mr-1">
                            <i className="fas fa-clock" />
                          </span>
                          10 min
                        </span>
                      </li>
                    </ul>

                    <p>{blogInfo.excerpt || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ut recusandae assumenda..."}</p>

                    <div className="pro-modal-footer mt-30 mb-45">
                      <div className="row align-items-center justify-content-md-between">
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                          <div className="modal-tags d-sm-flex align-items-center pt-25">
                            <h6 className="mb-0 pr-15">Tags :</h6>
                            <ul className="tag-list">
                              {tags.map((item, i) => (
                                <li key={i} className="d-inline-block pr-10">
                                  <Link href={item.path} className="d-block">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                          <div className="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25">
                            <h6 className="pr-12 mb-0 pb-0">Share :</h6>

                            <ul className="social-link text-md-right">
  {socialLink.map((item, i) => (
    <li key={i} className="d-inline-block pl-15">
      {item.link && item.link.startsWith("mailto:") ? (
        <button
          type="button"
          onClick={() => {
            // fallback : essaye mailto, sinon propose Gmail
            try {
              window.location.href = item.link;
            } catch (e) {
              const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("takwa.hafyen@gmail.com")}`;
              window.open(gmail, "_blank");
            }
          }}
          className="text-center d-inline-block transition-3 btn-unstyled"
          aria-label="email"
        >
          <i className={item.icon}></i>
        </button>
      ) : (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center d-inline-block transition-3"
          aria-label={item.icon}
        >
          <i className={item.icon}></i>
        </a>
      )}
    </li>
  ))}
</ul>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
