import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

interface IParams {
    movieId?: string;
}

export async function POST(
    request: Request,
    { params }: { params: IParams}
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { movieId } = params;

    if (!movieId || typeof movieId !== 'string') {
        throw new Error('Invalid Movie ID');
    }

    // double check if it is a valid movie
    const existingMovie = await prisma.movie.findUnique({
        where: {
          id: movieId,
        }
      });
  
    if (!existingMovie) {
        throw new Error('Invalid ID');
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];

    favoriteIds.push(movieId);

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    })

    const safeUser =  {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
        emailVerified: user.emailVerified?.toISOString() || null
    };

    return NextResponse.json(safeUser);
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { movieId } = params;
    
    if (!movieId || typeof movieId !== 'string') {
        throw new Error('Invalid Movie Id');
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])];

    favoriteIds = favoriteIds.filter((id) => id !== movieId);

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    })

    const safeUser =  {
        ...user,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
        emailVerified: user.emailVerified?.toISOString() || null
    };

    return NextResponse.json(safeUser);
}