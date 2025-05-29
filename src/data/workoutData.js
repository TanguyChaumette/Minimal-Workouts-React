export const workoutTypes = {
  fullBody: {
    name: 'All In',
    type: 'Full Body',
    workouts: {
      10: {
        type: 'fullBody',
        duration: 10,
        steps: [
          {
            name: 'Get Ready',
            duration: 10,
            videoUrl: '/videos/start-1.mp4',
            isBreak: false
          },
          {
            name: 'Jumping Jacks',
            duration: 30,
            videoUrl: '/videos/jumping-jacks.mp4',
            isBreak: false
          },
          {
            name: 'Break',
            duration: 20,
            videoUrl: '/videos/break-1.mp4',
            isBreak: true
          },
          {
            name: 'Push-ups',
            duration: 30,
            videoUrl: '/videos/pushups.mp4',
            isBreak: false
          },
          {
            name: 'Squats',
            duration: 30,
            videoUrl: '/videos/squats.mp4',
            isBreak: false
          },
          {
            name: 'Break',
            duration: 30,
            videoUrl: '/videos/break-2.mp4',
            isBreak: true
          },
          {
            name: 'Burpees',
            duration: 30,
            videoUrl: '/videos/burpees.mp4',
            isBreak: false
          },
        ]
      }
    }
  },
  upperBody: {
    name: 'Good Pump',
    type: 'Upper Body',
    workouts: {
      10: {
        type: 'upperBody',
        duration: 10,
        steps: [
          {
            name: 'Push-ups',
            duration: 60,
            videoUrl: '/videos/pushups.mp4',
            isBreak: false
          },
          {
            name: 'Tricep Dips',
            duration: 60,
            videoUrl: '/videos/tricep-dips.mp4',
            isBreak: false
          }
        ]
      }
    }
  },
  lowerBody: {
    name: 'Engine Running',
    type: 'Lower Body',
    workouts: {
      10: {
        type: 'lowerBody',
        duration: 10,
        steps: [
          {
            name: 'Squats',
            duration: 60,
            videoUrl: '/videos/squats.mp4',
            isBreak: false
          },
          {
            name: 'Lunges',
            duration: 60,
            videoUrl: '/videos/lunges.mp4',
            isBreak: false
          }
        ]
      }
    }
  },
  cardioHiit: {
    name: "Let's Sweat",
    type: 'Cardio HIIT',
    workouts: {
      10: {
        type: 'cardioHiit',
        duration: 10,
        steps: [
          {
            name: 'Jumping Jacks',
            duration: 60,
            videoUrl: '/videos/jumping-jacks.mp4',
            isBreak: false
          },
          {
            name: 'High Knees',
            duration: 60,
            videoUrl: '/videos/high-knees.mp4',
            isBreak: false
          },
          {
            name: 'Mountain Climbers',
            duration: 60,
            videoUrl: '/videos/mountain-climbers.mp4',
            isBreak: false
          }
        ]
      }
    }
  }
}; 