export function UserFeedback(){

  const feedbacks = [
    {
      name: 'John Doe3',
      comentario: '3 Wollet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don\'t need to worry because it\'s all in one place! thanks!'
    },
    {
      name: 'John Doe2',
      comentario: '2 Wollet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don\'t need to worry because it\'s all in one place! thanks!'
    },
    {
      name: 'John Doe1',
      comentario: '1 Wollet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don\'t need to worry because it\'s all in one place! thanks!'
    }
  ]
  function getRandomFeedback() {
    const randomIndex = Math.floor(Math.random() * feedbacks.length);
    return feedbacks[randomIndex];
  }

  const randomFeedback = getRandomFeedback();

  return(
    <section className="w-full bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#ffedc3] rounded-2xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <span className="text-4xl md:text-5xl font-serif">''</span>
            <blockquote className="text-lg md:text-xl text-zinc-800 leading-relaxed">
              {randomFeedback.comentario}
            </blockquote>
            <footer className="text-zinc-600 mt-6">
              {randomFeedback.name}
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}