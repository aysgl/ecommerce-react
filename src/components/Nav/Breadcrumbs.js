import React, { useEffect, useState } from 'react'
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap'
import { useRouter } from 'next/router';
import Link from "next/link"

export default function Breadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0) + path.slice(1)
      };
    });
    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <Container>
      {breadcrumbs && breadcrumbs.length > 0 &&
        <Breadcrumb >
          <BreadcrumbItem>
            <Link href="/">
              <a className='link-secondary text-decoration-none'>
                <i className="bi bi-house"></i>
              </a>
            </Link>
          </BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb) => (
              breadcrumb.href == router.asPath ?
                <BreadcrumbItem key={breadcrumb.href}>
                  <Link href={breadcrumb.href}>
                    <a className='link-secondary text-decoration-none'>
                      {breadcrumb.label.split('-').join(" ")}
                    </a>
                  </Link>
                </BreadcrumbItem> : null
            ))}
        </Breadcrumb>
      }
    </Container >
  )
}
