
exports.seed = function(knex, Promise) {
  return knex('device_schedules').del().then(function(){
    return Promise.all([
      knex('device_schedules').insert({
        device_id: 1,
        schedule: JSON.stringify([
          {
            day: "Monday",
            open: {
              hour: 14,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Tuesday",
            open: {
              hour: 14,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Tuesday",
            open: {
              hour: 14,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Wednesday",
            open: {
              hour: 14,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Thursday",
            open: {
              hour: 14,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Friday",
            open: {
              hour: 14,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Saturday",
            open: null,
            close: null
          },
          {
            day: "Sunday",
            open: null,
            close: null
          },
        ])
      }),
      knex('device_schedules').insert({
        device_id: 2,
        schedule: JSON.stringify([
          {
            day: "Monday",
            open: {
              hour: 16,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },

          {
            day: "Tuesday",
            open: {
              hour: 16,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Wednesday",
            open: {
              hour: 16,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Thursday",
            open: {
              hour: 16,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Friday",
            open: {
              hour: 16,
              minute: 30
            },
            close: {
              hour: 18,
              minute: 0
            }
          },
          {
            day: "Saturday",
            open: {
              hour: 13,
              minute: 0
            },
            close: {
              hour: 17,
              minute: 0
            }
          },
          {
            day: "Sunday",
            open: null,
            close: null
          },
        ])
      })

    ])
  })
};