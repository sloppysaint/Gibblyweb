import React from 'react'

function MainThird() {
  return (
    <div>
      <section className="text-center p-8 bg-gray-100">
          <h1 className="text-3xl mb-4">Reviews</h1>
          <div className="flex justify-center gap-8">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg w-80">
              <p className="mb-4">Gibbly has been an absolute pleasure to use! It has made lesson planning so fun and easy! It has saved me so much time while creating relevant curriculum based lessons!</p>
              <div className="flex items-center">
                <img src="user.png" alt="Reviewer 1" className="rounded-full w-12 h-12 mr-4" />
                <div>
                  <h4 className="text-lg">Chris Jake</h4>
                  <p className="text-sm">Google</p>
                  <div className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg w-80">
              <p className="mb-4">Gibbly helps take the game off the computer and into the minds of the students. Using AI to create a quiz that ties into the content and then made into a lesson sets Gibbly apart.</p>
              <div className="flex items-center">
                <img src="user.png" alt="Reviewer 2" className="rounded-full w-12 h-12 mr-4" />
                <div>
                  <h4 className="text-lg">Gemma Nolen</h4>
                  <p className="text-sm">Google</p>
                  <div className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg w-80">
              <p className="mb-4">Gibbly is excellent for peer induced teamwork! My students love and I love having the option to have teams. Great for review or study guides.</p>
              <div className="flex items-center">
                <img src="user.png" alt="Reviewer 3" className="rounded-full w-12 h-12 mr-4" />
                <div>
                  <h4 className="text-lg">John Tate</h4>
                  <p className="text-sm">Google</p>
                  <div className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default MainThird
