import clientPromise from "@/app/api/lib/mongodb";

export async function POST(request) {
    const body = await request.json();

    try {
        const client = await clientPromise;
        const db = client.db("bitlinks_db");
        const collection = db.collection("url");

        const doc = await collection.findOne({ shorturl: body.shorturl });

        if (doc) {
            return Response.json({
                success: false,
                error: true,
                message: 'Short URL already exists!'
            });
        }

        const res = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
            createdAt: new Date(),
            clicks: 0
        });

        return Response.json({
            success: true,
            error: false,
            message: 'Short URL successfully created!',
            id: res.insertedId
        });

    } catch (error) {
        console.error("Database error:", error);
        return Response.json({
            success: false,
            error: true,
            message: 'Database error: ' + error.message
        }, { status: 500 });
    }
}