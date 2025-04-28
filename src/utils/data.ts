// lib/data.ts
import { Experience } from '../types/index';
import { ProjectType } from '../types/index';
import { SkillType } from '../types/index';

const API_BASE_URL = 'https://portfolio-backend-production-c334.up.railway.app';

async function fetchData<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!res.ok) {
        console.log(`Failed to fetch ${endpoint}`);
    }
    return res.json();
}


export async function fetchExperiences(): Promise<Experience[]> {
    return fetchData<Experience[]>('experience');
}

export async function fetchProjects(): Promise<ProjectType[]> {
    return fetchData<ProjectType[]>('projects');
}

export async function fetchSkills(): Promise<SkillType[]> {
    return fetchData<SkillType[]>('skill');
}
