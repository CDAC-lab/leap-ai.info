+++
title = "Architecture"
weight = 35
menuTitle = "Architecture"
+++

## Platform Architecture

LEAP was built entirely in-house on Microsoft Azure and is fully cloud native. Each domain within the platform is implemented as an independent microservice, deployed in Docker containers and accessed through a hardened security layer.

![LEAP microservice security architecture showing users accessing the React LEAP app, which authenticates via Azure AD using OpenID/OAuth and receives an Access Token, then routes requests through an API Gateway over a Secured VPN to containerised microservices (Campus MS, Building MS, Meter MS, Optimum MS built with Flask and Docker) backed by Azure SQL DB](/images/architecture/microservice-security.jpg)

Users access the React.js LEAP application, which authenticates via **Azure Active Directory** using OpenID/OAuth and receives a scoped Access Token. All API calls are routed through an **API Gateway** over a Secured VPN to the microservice layer — which includes Campus, Building, Meter, and Optimum microservices, each built with Flask and deployed in Docker containers, backed by a shared Azure SQL database.

This architecture ensures no microservice is directly exposed to the internet, every request is authenticated and authorised, and each domain can be independently scaled, updated and monitored without affecting the rest of the platform.
