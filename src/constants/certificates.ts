export type Certificate = {
	title: string;
	description: string;
	src: string;
};

export const certificates: Certificate[] = [
	{
		title: "Binary Studio Academy",
		description:
			"Successfully completed and defended the final project in the Binary Studio Academy course with high honors in April 2024. This intensive course covered Redux, React, TypeScript, PostgreSQL, OAuth2, Node.js, Stripe, Knex, Objection, Redux Toolkit, AWS S3, Fastify, and OpenAI.",
		src: "/assets/images/certificates/binary.jpg",
	},
	{
		title: "Genesis IT Product Development",
		description:
			'Successfully completed the internship online course "Creation and Development of IT Products" with a 100% success rate. Verified by Oleksii Nischyk, Education Operations Director, Genesis. Verification code: 56af5079a089c36b855d88ca3244ebce.',
		src: "/assets/images/certificates/genesis.png",
	},
	{
		title: "Foundations of Cybersecurity for Business",
		description:
			'Successfully completed the online program "Foundations of Cybersecurity for Business" in November 2024. This course focused on fundamental practices for ensuring cybersecurity in business environments.',
		src: "/assets/images/certificates/google.png",
	},
];
