import { type SubmitHandler, useForm } from 'react-hook-form'
import S3 from "aws-sdk/clients/s3"

export default function form() {

  const {

    register,

    handleSubmit,

    formState: { errors },

  } = useForm()

  const s3 = new S3({
    region: process.env.APP_AWS_REGION,
    accessKeyId: process.env.APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.APP_AWS_SECRET_KEY,
    signatureVersion: 'v4'
  })

  const uploadPhoto = async (e : any) => {
    e.preventDefault()

    // if (!e.target.files || e.target.files.length <= 0) return

    console.log(process.env.APP_AWS_ACCESS_KEY)

    const file = e.target.files[0]

    const filename = encodeURIComponent(file.name)

    const res = await fetch(`/api/aws/upload-image?file=${file.name}`)

    const data = await res.json()

    console.log(data)

    const formData = new FormData()

    formData.append('key', "file")
    formData.append('file', file)

    fetch(data.url, {
      mode: 'no-cors',
      method: 'POST',
      body: formData,
    }).catch(e => {
      console.log(e)
    })

  }

  return (
    <div className="w-8/12 flex flex-col gap-4">
      <form onSubmit={uploadPhoto}>
        <label className="block">

          <span className="text-gray-700">Upload a .png or .jpg image (max 1MB).</span>

          <input

            {...register('image', { required: true })}

            onChange={uploadPhoto}

            type="file"

            accept="image/png, image/jpeg"

            name="image"

          />

        </label>


        <button
          type="submit"
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >Oruulda</button>
      </form>
    </div>
  )

}