export const indexBreeds = () => (
    new Promise((resolve, reject) => {
        resolve({            
            data: {
                message: {
                    breed1: [],
                    breed2: [],
                    breed3: [
                        'sub1',
                        'sub2'
                    ]
                }
            }            
        })
    })
)