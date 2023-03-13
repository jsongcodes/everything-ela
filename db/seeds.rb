Student.destroy_all
Post.destroy_all
Comment.destroy_all

puts "seeding students..."

student1 = Student.create(username: 'Moet', password: 'moet1')
student2 = Student.create(username: 'Joshua', password: 'joshua1')
student3 = Student.create(username: 'Hayden', password: 'hayden1')
student4 = Student.create(username: 'Aaliyah', password: 'aaliyah1')
student5 = Student.create(username: 'Eliajah', password: 'eliajah1')

puts "seeding posts..."

post1 = Post.create(
    title: "silent e",
    image: "https://blog.allaboutlearningpress.com/wp-content/uploads/2015/07/Silent-E-Featured-540x400.png",
    body: "The silent e hides behind a consonant and scares a vowel to say its own name!",
    student_id: student1.id)
post2 = Post.create(
    title: "text evidence",
    image: "https://res.cloudinary.com/teepublic/image/private/s--mEymW5CG--/c_fit,g_north_west,h_816,w_840/co_000000,e_outline:40/co_000000,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1590857515/production/designs/10793192_0.jpg",
    body: "Strong writers always prove their ideas with text evidence.",
    student_id: student2.id)
post3 = Post.create(
    title: "main idea",
    image: "https://cdn.brainpop.com/english/writing/mainidea/screenshot1.png",
    body: "Great readers always think about what the text is teaching us while reading. Then they jot the main idea at the end of the text.",
    student_id: student3.id)
post4 = Post.create(
    title: "capitalization",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*euRdVF_C82YBDrmftlwopw.jpeg",
    body: "Most of the things we capitalize in English are what we refer to as ‘proper nouns.’ They are the names of specific and unique things.",
    student_id: student4.id)
post5 = Post.create(
    title: "punctuation",
    image: "https://filestore.medicineslearningportal.org/images/istock%20punctuation.png",
    body: "The marks, such as period, comma, and parentheses, used in writing to separate sentences and their elements and to clarify meaning.",
    student_id: student4.id)
post6 = Post.create(
    title: "annotating",
    image: "https://cupsandthoughts.files.wordpress.com/2017/09/gxub4080.jpg?w=2240",
    body: "Annotating allows readers to keep track of key details while reading.",
    student_id: student5.id)


puts "seeding comments..."
comment1 = Comment.create(body: "This was so helpful!", student_id: student5.id, post_id: post1.id)
comment2 = Comment.create(body: "I am trying my best not to get tricked by the sneaky e!", student_id: student4.id, post_id: post2.id)
comment3 = Comment.create(body: "Annotating is difficult but I'm going to keep trying my best.", student_id: student3.id, post_id: post3.id)

puts "Done seeding!"