import React from 'react';
import { FaHome, FaLightbulb, FaFileAlt, FaBriefcase } from 'react-icons/fa';

function BuildYourDream() {
	const companyData = {
		name: "Why Choose Realm Consulting Services ?",
		description: "Your reliable partner in the world of manufacturing projects. With a rich history dating back to 2006, we have been consistently delivering excellence in a one-stop solution for manufacturing projects related services."
	};

	const services = [
		{
			icon: <FaHome style={{ color: 'palegoldenrod' }} />,
			title: "Expertise",
			subtitle: "Highly qualified professionals",
			description: "Our team comprises highly qualified, experienced, and dynamic professionals, including Chartered Accountants, Company Secretaries, Advocates, Lawyers, MBAs, Chartered Engineers, Architects, and Government Approved Valuators. Their expertise ensures customized solutions tailored to your unique needs.",
		},
		{
			icon: <FaFileAlt style={{ color: 'palegoldenrod' }} />,
			title: "Customized Reports",
			subtitle: "Tailored reports for your needs",
			description: "Our expert team provides various tailored reports, including Survey, Analysis, Investigation, and Search Reports. These reports cover technical, legal, financial, marketing, and operational aspects. We also assess project feasibility and viability to give you a clear picture of your project's potential.",
		},
		{
			icon: <FaLightbulb style={{ color: 'palegoldenrod' }} />,
			title: "Comprehensive Services",
			subtitle: "Specializing in licenses, approvals, permissions, and more",
			description: "We specialize in licenses, approvals, permissions, consents, NOCs, subsidies, incentives, and project finance consultancy. Our comprehensive range of services ensures that you have all the support you need for your manufacturing projects.",
		},
		{
			icon: <FaBriefcase style={{ color: 'palegoldenrod' }} />,
			title: "Client-Centric Approach",
			subtitle: "Committed to your project's success",
			description: "We are committed to meeting the diverse needs of our esteemed clients. Your project's success is our top priority, and we work closely with you to achieve your goals.",
		},
	];


	return (
		<div>
			<section className="services-section">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-12 col-lg-4">
							<div className="service-box">
								<h3 className="title">{companyData.name}</h3>
								<p className="description">{companyData.description}</p>
							</div>
						</div>
						{services.map((service, index) => (
							<div key={index} className="col-md-8 col-sm-6 col-lg-4">
								<div className="service-box-icon ">
									<div className="front ">
									<i className="icon ">
										{service.icon}
									</i>
											<h5 className="title">{service.title}</h5>

										<span className="subtitle">{service.subtitle}</span>
									</div>
									<p className="description">{service.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default BuildYourDream;

